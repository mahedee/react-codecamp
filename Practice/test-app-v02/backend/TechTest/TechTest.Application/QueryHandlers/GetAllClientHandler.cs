using MediatR;
using TechTest.Application.Queries;
using TechTest.Core.Entities;
using TechTest.Core.Interfaces;


namespace Ordering.Application.Handlers.QueryHandlers
{
    // Get all customer query handler with List<Customer> response as output
    public class GetAllClientHandler : IRequestHandler<GetAllClientQuery, List<Client>>
    {
        private readonly IClientRepository _clientRepository;

        public GetAllClientHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<List<Client>> Handle(GetAllClientQuery request, CancellationToken cancellationToken)
        {
            return (List<Client>)await _clientRepository.GetAllAsync();
        }
    }
}
