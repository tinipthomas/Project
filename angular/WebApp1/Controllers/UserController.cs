using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstWebApplication.Common;
using WebApp1.Models;
using WebApp1.Repos;

namespace WebApp1.Controllers
{
    public class UserController : ApiController
    {
        // GET: api/User
        public IEnumerable<UserStory> Get()
        {
            MainDBC db = new MainDBC();
            return db.userStories.Select(emp => emp).ToList();
        }

        // GET: api/User/5
        public UserStory Get(int id)
        {
            MainDBC db = new MainDBC();
            return db.userStories.Where(emp => emp.userstoryid == id).FirstOrDefault();
        }

        // POST: api/User
        public void Post(UserStory value)
        {
            MainDBC db = new MainDBC();
            UserRepos.Createuserstories(value);
        }

        // PUT: api/User/5
        public void Put(int id, UserStory Emp)
        {
            MainDBC db = new MainDBC();
            UserStory em = db.userStories.Where(emp => emp.userstoryid == id).FirstOrDefault();
            if (em != null)
            {
                em.story = Emp.story;
                em.proid = Emp.proid;
                db.SaveChanges();
            }
           // value.userstoryid = id;
           // UserRepos.EditUser(value);
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
            UserStory e = new UserStory();
            e.userstoryid = id;
            UserRepos.Operation_delete_id(id);
        }
    }
}
