 using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DropdownAPI.Models
{
 public class City
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        
        [ForeignKey("State")]
		public int StateId{get;set;}
		

        public virtual State State { get; set; }
    }
}