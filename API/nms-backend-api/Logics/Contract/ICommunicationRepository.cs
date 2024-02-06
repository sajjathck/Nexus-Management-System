using nms_backend_api.Entity;

namespace nms_backend_api.Logics.Contract
{
    public interface ICommunicationRepository
    {
        void AddMessage(Communication comm);
        void DeleteMessage(Communication comm);
        void EditMessage(Communication comm);
        List<Communication> GetAllMessage();
        List<Communication> GetMessageByRecievers(string recievers); //teacher,student,All---+parents(optional)

    }
}
