using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTest.Application.Commands;
using TechTest.Application.DTOs;
using TTechTest.Core.Entities;

namespace TechTest.Application.Common
{
    public class TechTestProfile : Profile
    {
        public TechTestProfile()
        {
            CreateMap<Client, CreateClientCommand>().ReverseMap();
            CreateMap<Client, ClientDTO>().ReverseMap();

            //CreateMap<ProductAggregateRoot, ProductResponseDTO>()
            //  .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
            //  .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            //  .ForMember(dest => dest.Price, opt => opt.MapFrom(src => src.Price))
            //  .ReverseMap();
        }

    }
}
