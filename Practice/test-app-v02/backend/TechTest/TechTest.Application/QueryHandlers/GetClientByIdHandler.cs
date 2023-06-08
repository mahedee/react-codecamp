using AutoMapper;
using Location.Application.Queries.Countries;
using MediatR;
using TechTest.Application.DTOs;
using TechTest.Core.Interfaces;

namespace TechTest.Application.QueryHandlers
{
    public class GetClientByIdHandler : IRequestHandler<GetClientByIdQuery, ClientDTO>
    {
        private readonly IClientRepository _clientRepository;
        private readonly IMapper _mapper;

        public GetClientByIdHandler(IClientRepository clientRepository, IMapper mapper)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
        }
        public async Task<ClientDTO> Handle(GetClientByIdQuery request, CancellationToken cancellationToken)
        {
            var client = await _clientRepository.GetAsync(request.Id);
            var clientReponse = _mapper.Map<ClientDTO>(client);
            return clientReponse;
        }
    }
}
