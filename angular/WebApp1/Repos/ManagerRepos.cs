using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FirstWebApplication.Common;
using WebApp1.Models;

namespace WebApp1.Repos
{
    public class ManagerRepos
    {
        public static void CreateManagerComments(ManagerComent employee)
        {
            MainDBC db = new MainDBC();
            db.managerComents.Add(employee);
            db.SaveChanges();
        }
        public static void EditManagerComments(ManagerComent Emp)
        {
            MainDBC db = new MainDBC();
            ManagerComent em = Operation_search_id(Emp);
            em.mgrid = Emp.mgrid;
            em.comments = Emp.comments;
            em.taskid = Emp.taskid;
            db.SaveChanges();
        }
        public static ManagerComent Operation_search_id(ManagerComent id_search)
        {
            MainDBC db = new MainDBC();
            ManagerComent x = (db.managerComents.Where(e => e.mgrid == e.mgrid)).First();
            return x;
        }
        public List<ManagerComent> Operation_show_all()
        {
            MainDBC db = new MainDBC();
            return db.managerComents.Select(emp => emp).ToList();
        }
        public static void Operation_delete_id(int id_delete)
        {
            MainDBC db = new MainDBC();
            var qwer = db.managerComents.FirstOrDefault(ep => ep.mgrid == id_delete);
            if (qwer != null)
            {
                db.managerComents.Remove(qwer);
                db.SaveChanges();
            }
        }
    }
}