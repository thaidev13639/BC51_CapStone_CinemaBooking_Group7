import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, DatePicker, Select, notification } from 'antd';
import { useParams } from "react-router-dom";
import { cinemaService } from "../../../../services/cinema";
import { useFormik } from "formik";
import moment from "moment";
import { validationAddShowTime } from "../../../../ValidateYup/ValidateYup";
export default function AdminCreateShowTime() {
  const param = useParams()
  const [stateRCP, setStateRCP] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  })
  useEffect(() => {
    fetchGetListHTRC()
  }, [])

  const formik = useFormik({
    initialValues: {
      maPhim: param.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0
    },
    onSubmit: async (value) => {
      console.log(value)
      try {
        await cinemaService.fetchCreateShowTime(value);
        notification.success({
          message: "Tạo Lịch Chiếu Thành Công",
          placement: "topLeft",
          duration: 2
        })
      } catch (error) {

      }
    }
  })

  const fetchGetListHTRC = async () => {
    try {
      const result = await cinemaService.fetchGetHTRApi()
      setStateRCP({
        ...stateRCP,
        heThongRapChieu: result.data.content
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handlSelectHTR = () => {
    return stateRCP.heThongRapChieu.map((element) => {
      return {
        label: element.tenHeThongRap,
        value: element.maHeThongRap,
      }
    })
  }
  const handlSelectCRC = () => {
    return stateRCP.cumRapChieu.map((element) => {
      return {
        label: element.tenCumRap,
        value: element.maCumRap,
      }
    })
  }

  const handleChangeHTR = async (value) => {
    console.log(value)
    try {
      const result = await cinemaService.fetchGetCRCApi(value)
      setStateRCP({
        ...stateRCP,
        cumRapChieu: result.data.content
      })
    } catch (error) {
      console.log(error)
    }
  }
  const handleChangeCR = (value) => {
    console.log(value)
    formik.setFieldValue("maRap", value)
  }
  const onOk = (value) => {
    formik.setFieldValue("ngayChieuGioChieu", moment(value).format("DD/MM/YYYY hh:mm:ss"))
    console.log(value)
  }
  const onChangeDate = (value) => {
    formik.setFieldValue("ngayChieuGioChieu", moment(value).format("DD/MM/YYYY hh:mm:ss"))
    console.log(value)
  }
  const onChangeNumber = (value) => {
    formik.setFieldValue("giaVe", value)

  }
  return (
    <div className="container">
      <Form onSubmitCapture={formik.handleSubmit} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <h3 className="text-2xl" style={{ color: "chocolate" }}>Tạo Lịch Chiếu Phim : </h3> <br />
        <h5 className=" mb-5">{param.tenPhim}</h5>
        {/* <img src="" alt="" /> */}
        <Form.Item label="Hệ Thống Rạp" >
          <Select options={handlSelectHTR()} onChange={handleChangeHTR} placeholder="Chọn Hệ Thông Rạp" />
        </Form.Item>
        <Form.Item label="Cụm Rạp" >
          <Select options={handlSelectCRC()} onChange={handleChangeCR} placeholder="Chọn Cụm Rạp" />
        </Form.Item>
        <Form.Item label="Ngày Chiếu Giờ Chiếu" >
          <DatePicker format={"DD/MM/YYYY hh:mm:ss"} showTime onChange={onChangeDate} onOk={onOk} />
        </Form.Item>
        <Form.Item label="Giá Vé" >
          <InputNumber min={75000} max={150000} onChange={onChangeNumber} /> vnđ
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Tạo Lịch Chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
