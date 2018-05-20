using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp1.Models
{
    public class Project
    {
        [Key]
        public int proid { get; set; }
        public string proname { get; set; }
        public string clientname { get; set; }
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
    }
}