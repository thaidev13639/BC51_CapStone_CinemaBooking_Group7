import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
  notification,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { movieService } from '../../../../services/movie';
import { validationAddMovie } from '../../../../ValidateYup/ValidateYup';
import { useNavigate } from 'react-router-dom';

export default function AdminCreateFilm() {
  const navigate = useNavigate()
  const [imgSrc, setImgSrc] = useState("");

  const addMovie = async (data) => {
    try {
      await movieService.fetchAddFilmApi(data)
      notification.success({
        message: "Thêm Phim Thành Công",
        placement: "bottomRight",
        duration: 2
      })
      navigate("/admin/detail-film")
    } catch (error) {
      notification.warning({
        message: error?.response?.data?.message || "Thêm Phim Không Thành Công",
        placement: "bottomRight",
        duration: 3
      })
    }
  }
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    validationSchema: validationAddMovie,
    onSubmit: (values) => {

      values.maNhom = "GP03"
      let formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key])
        } else {
          formData.append(key, values.hinhAnh, values.hinhAnh.name)
        }
      };
      addMovie(formData)
      formik.resetForm()
    }

  })

  const handleChangeDate = (date) => {
    if (date) {
      let dateMoment = moment(date.$d).format("DD/MM/YYYY")
      console.log(dateMoment)
      formik.setFieldValue("ngayKhoiChieu", dateMoment)
    }
  }

  const handlChangeValue = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    }
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0]

    if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/jpg") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result)
      }
      formik.setFieldValue("hinhAnh", file)

    }
  }

  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form className='px-4'
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3 style={{ marginBottom: "5%" }}>Thêm Phim</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim">
        <Input name='tenPhim' onChange={formik.handleChange} />
        {formik.errors.tenPhim && formik.touched.tenPhim && (
          <span className="text-danger">{formik.errors.tenPhim}</span>
        )}
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name='trailer' onChange={formik.handleChange} />
        {formik.errors.trailer && formik.touched.trailer && (
          <span className="text-danger">{formik.errors.trailer}</span>
        )}
      </Form.Item>
      <Form.Item label="Mô Tả">
        <Input name='moTa' onChange={formik.handleChange} />
        {formik.errors.moTa && formik.touched.moTa && (
          <span className="text-danger">{formik.errors.moTa}</span>
        )}
      </Form.Item>
      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker format={"DD/MM/YYYY"} name='ngayKhoiChieu' onChange={handleChangeDate} />
        {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
          <span className="text-danger">{formik.errors.ngayKhoiChieu}</span>
        )}
      </Form.Item>
      <Form.Item label="Đang Chiếu" valuePropName="checked">
        <Switch onChange={handlChangeValue("dangChieu")} />
      </Form.Item>
      <Form.Item label="Sắp Chiếu" valuePropName="checked">
        <Switch onChange={handlChangeValue("sapChieu")} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handlChangeValue("hot")} />
      </Form.Item>
      <Form.Item label="Số Sao">
        <InputNumber name='danhGia' onChange={handlChangeValue("danhGia")} min={1} max={10} />
        {formik.errors.danhGia && formik.touched.danhGia && (
          <span className="text-danger">{formik.errors.danhGia}</span>
        )}
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <input name='hinhAnh' type="file" accept='image/png ,image/jpeg, image/gif , image/jpg' onChange={handleChangeFile} />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
      </Form.Item>

      <Form.Item label="Hành Động">
        <button className='btn btn-success' type="submit">Thêm</button>
      </Form.Item>
    </Form>
  );
}
