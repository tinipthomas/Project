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
    public class ManagerController : ApiController
    {
        // GET: api/Manager
        public IEnumerable<ManagerComent> Get()
        {
            MainDBC db = new MainDBC();
            return db.managerComents.Select(emp => emp).ToList();
        }

        // GET: api/Manager/5
        public ManagerComent Get(int id)
        {
            MainDBC db = new MainDBC();
            return db.managerComents.Where(emp => emp.mgrid == id).FirstOrDefault();
        }

        // POST: api/Manager
        public void Post(ManagerComent value)
        {
            MainDBC db = new MainDBC();
            ManagerRepos.CreateManagerComments(value);
        }

        // PUT: api/Manager/5
        public void Put(int id, ManagerComent Emp)
        {
            MainDBC db = new MainDBC();
            ManagerComent em = db.managerComents.Where(emp => emp.mgrid == id).FirstOrDefault();
            if (em != null)
            {
                em.comments = Emp.comments;
                em.taskid = Emp.taskid;
                db.SaveChanges();
            }
            //value.mgrid = id;
            //ManagerRepos.EditManagerComments(value);
        }

        // DELETE: api/Manager/5
        public void Delete(int id)
        {
            ManagerComent e = new ManagerComent();
            e.mgrid = id;
            ManagerRepos.Operation_delete_id(id);
        }
    }
}
