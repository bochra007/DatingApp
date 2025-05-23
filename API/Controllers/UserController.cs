using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers;

[Authorize]
public class UsersController(IUserRepository userRepository) : BaseApiController
{
    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
        var users = await userRepository.GetUsersAsync();
            return Ok(users) ;
    }

    [Authorize]
     [HttpGet("{username}")] // api/users/id
    public async Task<ActionResult<AppUser>> GetUser(string username){
            var user=await userRepository.GetUserByUsernameAsync(username);
            if (user == null ) return NotFound();
            return user ;
    }
}