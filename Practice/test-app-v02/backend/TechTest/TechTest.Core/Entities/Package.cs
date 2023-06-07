using System.ComponentModel.DataAnnotations.Schema;
using TechTest.Core.Entities.Base;

namespace TechTest.Core.Entities
{
    public class Package : BaseEntity
    {
        //public int Id { get; set; }
        public int ClientId { get; set; }
        public string PackageName { get; set; }
    }
}
