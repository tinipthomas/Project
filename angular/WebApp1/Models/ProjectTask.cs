using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp1.Models
{
    public class ProjectTask
    {
        [Key]
        public int protaskid { get; set; }
        public int assignedto { get; set; }
        public int userstoryid { get; set; }
        public DateTime tstartdate { get; set; }
        public DateTime tenddate { get; set; }
        public DateTime tcompletion { get; set; }
    }
}