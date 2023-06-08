using AutoMapper;
using MediatR;
using TechTest.Application.DTOs;
using TechTest.Core.Interfaces;

namespace Location.Application.Queries.Countries
{
    public class GetClientByIdQuery : IRequest<ClientDTO>
    {
        public int Id { get; private set; }

        public GetClientByIdQuery(int id)
        {
            this.Id = id;
        }
    }
   

}
