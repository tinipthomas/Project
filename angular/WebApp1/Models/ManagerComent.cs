using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp1.Models
{
    public class ManagerComent
    {
        [Key]
        public int mgrid { get; set; }
        public string comments { get; set; }
        public int taskid { get; set; }
    }
}