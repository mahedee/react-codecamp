using System.ComponentModel.DataAnnotations.Schema;

namespace TechTest.API.Model
{
    public class Package
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string PackageName { get; set; }

        [ForeignKey("ClientId")]
        public virtual Client Client { get; set; }
    }
}
