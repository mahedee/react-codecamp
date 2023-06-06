namespace TechTest.API.Model
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string lastName { get; set; }

        public List<Client> Clients { get; set; }
    }
}
