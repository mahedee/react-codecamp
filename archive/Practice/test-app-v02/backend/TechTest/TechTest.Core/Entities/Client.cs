using TechTest.Core.Entities.Base;

namespace TechTest.Core.Entities
{
    public class Client : BaseEntity
    {
        //public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        //public ICollection<Package> Packages { get; }
    }
}
