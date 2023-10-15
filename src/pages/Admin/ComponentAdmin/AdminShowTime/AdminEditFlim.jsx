import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminEditFilm() {
    const param = useParams()
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState("");
    const [stateInfoFilm, setInfoFilm] = useState({})

    useEffect(() => {
        fetchDetailFilm()
    }, [])

    const fetchDetailFilm = async () => {

        try {
            const detailFilm = await movieService.fetchMovieDetailApi(param.id);
            setInfoFilm(detailFilm.data.content)
        } catch (error) {
            notification.warning({
                message: "không thể lấy thông tin"
            })
        }

    }


    const editFilm = async (data) => {
        try {
            await movieService.fetchEditFilmApi(data)
            notification.success({
                message: "Chỉnh Sửa Thành Công",
                placement: "bottomRight",
                duration: 2
            })
            navigate("/admin")
        } catch (error) {
            console.log(error)
            notification.warning({
                message: error?.response?.data?.content || "Chỉnh Sửa Không Thành Công",
                placement: "bottomRight",
                duration: 3
            })
        }
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: param.id,
            tenPhim: stateInfoFilm?.tenPhim,
            trailer: stateInfoFilm?.trailer,
            moTa: stateInfoFilm?.moTa,
            ngayKhoiChieu: "",
            dangChieu: stateInfoFilm?.dangChieu,
            sapChieu: stateInfoFilm?.sapChieu,
            hot: stateInfoFilm?.hot,
            danhGia: stateInfoFilm?.danhGia,
            hinhAnh: null,
        },
        validationSchema: validationAddMovie,
        onSubmit: (values) => {
            
            console.log(values)
            values.maNhom = "GP12"
            let formData = new FormData();

            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append(key, values.hinhAnh, values.hinhAnh.name)
                    }
                }
            };
            console.log(formData)
            editFilm(formData)
        }

    })

    const handleChangeDate = (date) => {
        if (date) {
            console.log(date)
            console.log(moment(date).format("DD/MM/YYYY"))
            let dateMoment = moment(date.$d).format("DD/MM/YYYY")
            formik.setFieldValue("ngayKhoiChieu", dateMoment)
        }
    }

    const handlChangeValue = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = async (e) => {
        let file = e.target.files[0]

        if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/jpg") {
            await formik.setFieldValue("hinhAnh", file)
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }

        }
    }
    console.log(formik.values.ngayKhoiChieu)
    console.log(stateInfoFilm.ngayKhoiChieu)

    
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
            <h3 style={{ marginBottom: "5%", textTransform: "uppercase"  }}>Chỉnh Sửa Thông Tin Phim</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên Phim">
                <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                {formik.errors.tenPhim && formik.touched.tenPhim && (
                    <span className="text-danger">{formik.errors.tenPhim}</span>
                )}
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                {formik.errors.trailer && formik.touched.trailer && (
                    <span className="text-danger">{formik.errors.trailer}</span>
                )}
            </Form.Item>
            <Form.Item label="Mô Tả">
                <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
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
            <Form.Item label="Đang Chiếu" >
                <Switch onChange={handlChangeValue("dangChieu")} checked={formik.values.dangChieu} />
            </Form.Item>
            <Form.Item label="Sắp Chiếu" >
                <Switch onChange={handlChangeValue("sapChieu")} checked={formik.values.sapChieu} />
            </Form.Item>
            <Form.Item label="Hot" >
                <Switch onChange={handlChangeValue("hot")} checked={formik.values.hot} />
            </Form.Item>
            <Form.Item label="Số Sao">
                <InputNumber name='danhGia' onChange={handlChangeValue("danhGia")} min={1} max={10} value={formik.values.danhGia} />
                {formik.errors.danhGia && formik.touched.danhGia && (
                    <span className="text-danger">{formik.errors.danhGia}</span>
                )}
            </Form.Item>
            <Form.Item label="Hình Ảnh">
                <input name='hinhAnh' type="file" accept='image/png ,image/jpeg, image/gif , image/jpg' onChange={handleChangeFile} />
                <br />
                <img style={{ width: 150, height: 150 }} src={imgSrc === "" ? stateInfoFilm.hinhAnh : imgSrc} alt="..." />
            </Form.Item>

            <Form.Item label="Hành Động">
                <button className='btn btn-success' type="submit">Sửa Thông Tin</button>
            </Form.Item>
        </Form>
    );
}
