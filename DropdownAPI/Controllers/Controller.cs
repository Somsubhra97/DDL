using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

using DropdownApi.Data;
using DropdownApi.Models;

namespace DropdownApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class Controller : ControllerBase
    {
      
      private readonly DataContext _context;
        public Controller(DataContext context)
        {
            _context = context;
        }

            
   
        [HttpGet("{id}")]
        public Task<IActionResult> GetCityList(int StateId){
            var list= new SelectList(_context.City.Where(c => c.StateId == StateId));
            return Ok(list);        
        
       }

       [HttpGet]
        public Task<IActionResult> GetStateList(){            
            return Ok(_context.State.ToListAsync());        
        
       }


        [HttpPost]        
        public async Task<IActionResult> Post([FromBody]Employee e)
        {
            try{
                if (ModelState.IsValid)
                {               
                    _context.Employee.Add(e);  
                    await _context.SaveChangesAsync(); 
                    return Ok();  
                }
            }
            catch(Exception)
            {
                 return BadRequest();               
            }          
            
        } 

        [HttpGet]
        public async Task<IActionResult> GetALL(){
             return Ok(_context.Employee.ToListAsync());
        }   
 
}