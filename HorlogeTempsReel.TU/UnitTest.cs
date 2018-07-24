using Xunit;
using HorlogeTempsReel;
using System.Threading.Tasks;

namespace HorlogeTempsReel.TU
{
    public class UnitTest
    {
        [Fact]
        public void HorlogeHub_SendClient_ShouldNotReturnAstring()
        {
            var test = new HorlogeHub();
            Assert.IsNotType<string>(test.SendClient("c"));
        }
    }
}
