using MediatR;
using Microsoft.AspNetCore.Mvc;
using Ordering.Application.Queries;
using TechTest.Application.Commands;
using TTechTest.Core.Entities;

namespace TechTest.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        //private readonly TechTestContext _context;

        private readonly IMediator _mediator;

        public ClientsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/Clients
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Client>> GetClients()
        {
            var response = await  _mediator.Send(new GetAllClientQuery());
            return response;
        }

        //// GET: api/Clients/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Client>> GetClient(int id)
        //{
        //    if (_context.Clients == null)
        //    {
        //        return NotFound();
        //    }
        //    var client = await _context.Clients.FindAsync(id);

        //    if (client == null)
        //    {
        //        return NotFound();
        //    }

        //    return client;
        //}

        //// PUT: api/Clients/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("Edit/{id}")]
        //public async Task<IActionResult> PutClient(int id, Client client)
        //{
        //    if (id != client.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(client).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ClientExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Client>> PostClient([FromBody] CreateClientCommand command)
        {

            var response = await _mediator.Send(command);
            return Ok(response);


            //if (_context.Clients == null)
            //{
            //    return Problem("Entity set 'TechTestContext.Clients'  is null.");
            //}
            //_context.Clients.Add(client);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }

        //// DELETE: api/Clients/5
        //[HttpDelete("Delete/{id}")]
        //public async Task<IActionResult> DeleteClient(int id)
        //{
        //    if (_context.Clients == null)
        //    {
        //        return NotFound();
        //    }
        //    var client = await _context.Clients.FindAsync(id);
        //    if (client == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Clients.Remove(client);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool ClientExists(int id)
        //{
        //    return (_context.Clients?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
