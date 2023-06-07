using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechTest.Core.Entities.Base
{
    // Base entity or auditable entity
    public class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // Auditable entity if required
        //public DateTime CreatedDate { get; set; }

        //public DateTime ModifiedDate { get; private set; }

        //public BaseEntity()
        //{
        //    this.ModifiedDate = DateTime.Now;
        //}
    }
}
