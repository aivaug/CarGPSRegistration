using backend.Models;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BaseCRUDController<T, IDType> : ControllerBase
            where T : BaseEntity<IDType>
    {
        private readonly IBaseService<T, IDType> _service;

        public BaseCRUDController(IBaseService<T, IDType> service)
        {
            _service = service;
        }

        [HttpDelete("{id}")]
        public virtual async Task<IActionResult> Delete(IDType id)
        {
            try
            {
                if (id == null) NotFound(new { message = "ID must be positive number" });

                var DeletedObj = await _service.Delete(id);

                if (DeletedObj == null)
                    return BadRequest(new { message = "Deletion failed" });

                return Ok(await _service.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public virtual async Task<IActionResult> GetAll()
        {
            try
            {
                var list = await _service.GetAll();

                if (list == null || list.Count == 0)
                {
                    return NotFound();
                }

                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public virtual async Task<IActionResult> GetById(IDType id)
        {
            try
            {
                if (id == null) return BadRequest(new { message = "ID must be positive" });

                var obj = await _service.GetById(id);

                if (obj == null)
                {
                    return NotFound();
                }

                return Ok(obj);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public virtual async Task<IActionResult> Create([FromBody] T obj)
        {
            try
            {
                var returnObj = await _service.Create(obj, int.Parse(User.Identity.Name));

                if (returnObj == null)
                    return BadRequest(new { message = "Object not valid" });

                return Ok(returnObj);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public virtual async Task<IActionResult> Update([FromBody] T obj, IDType id)
        {
            try
            {
                if (id == null) return BadRequest(new { message = "ID must be positive" });
                var returnObj = await _service.Update(obj, id);

                if (returnObj == null)
                    return BadRequest(new { message = "Object not valid" });

                return Ok(returnObj);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
