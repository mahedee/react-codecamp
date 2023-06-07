using MediatR;
using TTechTest.Core.Entities;

namespace Ordering.Application.Queries
{
    // Customer query with List<Customer> response
    public record GetAllClientQuery : IRequest<List<Client>>
    {

    }
}
