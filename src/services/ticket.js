
import { requestApi } from "../configs/configApi";

class TicketService {
  fetchTicketDetailApi(id) {
    return requestApi({
      url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    });
  }


  bookTicketApi(data) {
    return requestApi({
      url: `/QuanLyDatVe/DatVe`,
      method:"POST",
      data, //data = data,
      });
    }
}




export const ticketService = new TicketService();
