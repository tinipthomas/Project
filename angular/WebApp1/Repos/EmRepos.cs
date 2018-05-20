using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FirstWebApplication.Common;
using WebApp1.Models;

namespace WebApp1.Repos
{
    public class EmRepos
    {
        public static void CreateEmployees(Employee employee)
        {
            MainDBC db = new MainDBC();
            db.Employees.Add(employee);
            db.SaveChanges();
        }
        public static void EditEmployee(Employee Emp)
        {
            MainDBC db = new MainDBC();
            Employee em = Operation_search_id(Emp);
            em.eid = Emp.eid;
            em.name = Emp.name;
            em.mgrid = Emp.mgrid;
            em.designation = Emp.designation;
            //em.contactno = Emp.contactno;
            em.emailid = Emp.emailid;
            em.skillsets = Emp.skillsets;
            db.SaveChanges();
        }
        public static Employee Operation_search_id(Employee id_search)
        {
            MainDBC db = new MainDBC();
            Employee x = (db.Employees.Where(e => e.eid == e.eid)).First();
            return x;
        }
        public List<Employee> Operation_show_all()
        {
            MainDBC db = new MainDBC();
            return db.Employees.Select(emp => emp).ToList();
        }
        public static void Operation_delete_id(int id_delete)
        {
            MainDBC db = new MainDBC();
            var qwer = db.Employees.FirstOrDefault(ep => ep.eid == id_delete);
            if (qwer != null)
            {
                db.Employees.Remove(qwer);
                db.SaveChanges();
            }
        }
    }
}