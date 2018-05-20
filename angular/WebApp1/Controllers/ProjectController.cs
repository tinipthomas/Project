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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            MainDBC db = new MainDBC();
            return db.Projects.Select(emp => emp).ToList();
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            MainDBC db = new MainDBC();
            return db.Projects.Where(emp => emp.proid == id).FirstOrDefault();
        }

        // POST: api/Project
        public void Post(Project value)
        {
            MainDBC db = new MainDBC();
            db.Projects.Add(value);
            db.SaveChanges();
 //           ProRepos.CreateProj(value);
        }
        
        // PUT: api/Project/5
        public void Put(int id, Project Emp)
        {
            MainDBC db = new MainDBC();
            Project em = db.Projects.Where(emp => emp.proid == id).FirstOrDefault();
            if (em != null)
            {
                em.proname = Emp.proname;
                em.clientname = Emp.clientname;
                em.startdate = Emp.startdate;
                em.enddate = Emp.enddate;
                db.SaveChanges();
            }
           // value.proid = id;
          //  ProRepos.EditProj(value);
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
            Project e = new Project();
            e.proid = id;
            ProRepos.Operation_delete_id(id);
        }
    }
}
