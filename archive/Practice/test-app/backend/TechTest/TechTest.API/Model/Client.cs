using Microsoft.Extensions.Hosting;

namespace TechTest.API.Model
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        //public ICollection<Package> Packages { get; }
    }
}
