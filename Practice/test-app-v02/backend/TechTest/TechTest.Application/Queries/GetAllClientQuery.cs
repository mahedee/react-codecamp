using MediatR;
using TechTest.Core.Entities;

namespace TechTest.Application.Queries
{
    // Customer query with List<Customer> response
    public record GetAllClientQuery : IRequest<List<Client>>
    {

    }
}
