using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Helpers
{
    public class AppSettings
    {
        public string Secret { get; set; }
        public string Salt
        {
            get
            {
                return "99f6c330-c7c5-410f-b257-54c85745191c";
            }
        }
    }
}
