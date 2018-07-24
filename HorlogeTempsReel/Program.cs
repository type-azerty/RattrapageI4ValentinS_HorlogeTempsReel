using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace HorlogeTempsReel
{
    public class Program
    {
        /// <summary>
        /// Méthode principale du programme
        /// </summary>
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        /// <summary>
        /// Méthode de construction de la configuration de la classe Startup pour le programme principale
        /// </summary>
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) => WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
    }
}
