import React from 'react';
import {
    Form,
    Input,
    notification
} from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userSvervice } from '../../../../services/user'
import { validate } from '../../../../ValidateYup/ValidateYup';


export default function AdminAddUser() {
    const navigate = useNavigate()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP00"
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            try {
                await userSvervice.fetchRegisterApi(values)
                notification.success({
                    message: "Đăng ký Thành Công",
                    placement: "bottomRight",
                    duration: 2
                })
                navigate("/admin/user")
            } catch (error) {
                console.log(error)
                notification.warning({
                    message: error?.response?.data?.content || "Dữ liệu không đúng",
                    placement: "bottomRight",
                    duration: 2
                })
            }
        }
    })


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
        >
            <h3 style={{ marginBottom: "5%", textTransform: "uppercase" }}>Thêm tài khoản</h3>

            <Form.Item label="Tài Khoản">
                <Input style={{ width: "50%" }} name='taiKhoan' onChange={formik.handleChange} /> <br />
                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                    <span className="text-danger">{formik.errors.taiKhoan}</span>
                )}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input style={{ width: "50%" }} name='hoTen' onChange={formik.handleChange} /> <br />
                {formik.errors.hoTen && formik.touched.hoTen && (
                    <span className="text-danger">{formik.errors.hoTen}</span>
                )}
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input style={{ width: "50%" }} name='matKhau' onChange={formik.handleChange} /> <br />
                {formik.errors.matKhau && formik.touched.matKhau && (
                    <span className="text-danger">{formik.errors.matKhau}</span>
                )}
            </Form.Item>
            <Form.Item label="Email">
                <Input style={{ width: "50%" }} name='email' onChange={formik.handleChange} /> <br />
                {formik.errors.email && formik.touched.email && (
                    <span className="text-danger">{formik.errors.email}</span>
                )}
            </Form.Item>
            <Form.Item label="Số điện thoại">
                <Input type="number" style={{ width: "50%" }} name='soDt' onChange={formik.handleChange} /> <br />
                {formik.errors.soDt && formik.touched.soDt && (
                    <span className="text-danger">{formik.errors.soDt}</span>
                )}
            </Form.Item>
            <Form.Item label="Hành Động">
                <button className='btn btn-success' type="submit">Đăng Ký</button>
            </Form.Item>
        </Form>
    );
}
