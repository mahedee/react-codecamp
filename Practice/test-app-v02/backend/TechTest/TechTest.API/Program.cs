using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TechTest.Application;
using TechTest.Core.Interfaces;
using TechTest.Core.Interfaces.Base;
using TechTest.Infrastructure.Persistence;
using TechTest.Infrastructure.Repository;
using TechTest.Infrastructure.Repository.Base;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();


//Enable CORS//Cross site resource sharing
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        b => b.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
    );
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TechTestContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Add Application dI
builder.Services.AddApplication();

// Register dependencies
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
//builder.Services.AddMediatR(typeof(CreateCustomerHandler).GetTypeInfo().Assembly);
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddTransient<IClientRepository, ClientRepository>();
//builder.Services.AddScoped(typeof(ICommandRepository<>), typeof(CommandRepository<>));
//builder.Services.AddTransient<Core.Repositories.Command.ICustomerCommandRepository, CustomerCommandRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
