using Location.Application.Queries.Countries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TechTest.Application.Commands;
using TechTest.Application.Queries;
using TechTest.Core.Entities;
using TechTest.Infrastructure.Persistence;

namespace TechTest.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly TechTestContext _context;

        private readonly IMediator _mediator;

        public ClientsController(IMediator mediator, TechTestContext context)
        {
            _mediator = mediator;
            _context = context;
        }

        // GET: api/Clients
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Client>> GetClients()
        {
            var response = await  _mediator.Send(new GetAllClientQuery());
            return response;
        }

        //GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {

            var response = await _mediator.Send(new GetClientByIdQuery(id));
            if (response == null)
            {
                return NotFound("Country information not found");
            }
            return Ok(response);
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> PutClient(int id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Client>> PostClient([FromBody] CreateClientCommand command)
        {

            var response = await _mediator.Send(command);
            return Ok(response);
        }

        // DELETE: api/Clients/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            if (_context.Clients == null)
            {
                return NotFound();
            }
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(int id)
        {
            return (_context.Clients?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
