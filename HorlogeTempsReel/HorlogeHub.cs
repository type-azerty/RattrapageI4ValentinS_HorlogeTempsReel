using Microsoft.AspNetCore.SignalR;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace HorlogeTempsReel
{
    public class HorlogeHub : Hub
    {

        /// <summary>
        /// Opération du Back-end/serveur
        /// Quand elle est invoqué elle synchronise/re-synchronise l'horloge à tout les clients connectés
        /// </summary>
        /// <param name="c">Chaine de caractère optionnelle pour l'invocation via le code front-end</param>
        /// <returns>Retourne les valeurs de l'horloge et la latence d'exécution</returns>
        public async Task SendClient(string c)
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            var hours = DateTime.Now.ToString("hh");
            var minutes = DateTime.Now.ToString("mm");
            var seconds = DateTime.Now.ToString("ss");
            sw.Stop();
            await Clients.All.SendAsync("ReceiveHorloge", hours, minutes, seconds, sw.ElapsedMilliseconds);
        }

    }
}