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
    public class ProjectTaskController : ApiController
    {
        // GET: api/ProjectTask
        public IEnumerable<ProjectTask> Get()
        {
            MainDBC db = new MainDBC();
            return db.ProjectTasko.Select(emp => emp).ToList();
        }

        // GET: api/ProjectTask/5
        public ProjectTask Get(int id)
        {
            MainDBC db = new MainDBC();
            return db.ProjectTasko.Where(emp => emp.protaskid == id).FirstOrDefault();
        }

        // POST: api/ProjectTask
        public void Post(ProjectTask value)
        {
            MainDBC db = new MainDBC();
            TaskRepos.CreateTask(value);
        }

        // PUT: api/ProjectTask/5
        public void Put(int id, ProjectTask Emp)
        {
            MainDBC db = new MainDBC();
            ProjectTask em = db.ProjectTasko.Where(emp => emp.protaskid == id).FirstOrDefault();
            if (em != null)
            {
                em.assignedto = Emp.assignedto;
                em.userstoryid = Emp.userstoryid;
                em.tstartdate = Emp.tstartdate;
                em.tenddate = Emp.tenddate;
                em.tcompletion = Emp.tcompletion;
                db.SaveChanges();
            }
            //value.protaskid = id;
           // TaskRepos.EditTask(value);
        }

        // DELETE: api/ProjectTask/5
        public void Delete(int id)
        {
            ProjectTask e = new ProjectTask();
            e.protaskid = id;
            TaskRepos.Operation_delete_id(id);
        }
    }
}