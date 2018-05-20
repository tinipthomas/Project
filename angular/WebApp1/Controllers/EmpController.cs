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
    public class EmpController : ApiController
    {
        // GET: api/Emp
        public IEnumerable<Employee> Get()
        {
            MainDBC db = new MainDBC();
            return db.Employees.Select(emp => emp).ToList();
        }

        // GET: api/Emp/5
        public Employee Get(int id)
        {
            MainDBC db = new MainDBC();
            return db.Employees.Where(emp => emp.eid == id).FirstOrDefault();
            
        }

        // POST: api/Emp
        public void Post(Employee employee)
        {
            MainDBC db = new MainDBC();
            EmRepos.CreateEmployees(employee);
        }

        // PUT: api/Emp/5
        public void Put(int id, Employee e)
        {
            MainDBC db = new MainDBC();
            Employee e1 = db.Employees.Where(emp => emp.eid == id).FirstOrDefault();
            if (e1 != null)
            {
                e1.name = e.name;
                e1.designation = e.designation;
                e1.mgrid = e.mgrid;
                e1.emailid = e.emailid;
                e1.skillsets = e.skillsets;
                db.SaveChanges();
            }
            //value.eid = id;
            //EmRepos.EditEmployee(value);
        }

        // DELETE: api/Emp/5
        public void Delete(int id)
        {
            Employee e = new Employee();
            e.eid = id;
            EmRepos.Operation_delete_id(id);
        }
    }
}
