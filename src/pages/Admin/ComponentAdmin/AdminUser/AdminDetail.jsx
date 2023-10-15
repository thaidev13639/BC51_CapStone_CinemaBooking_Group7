import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Select,
    notification
} from 'antd';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { userSvervice } from '../../../../services/user'
import { validateInfo } from '../../../../ValidateYup/ValidateYup';


export default function AdminDetail() {
    const param = useParams()
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        fetchGetUser()
    }, [])

    const fetchGetUser = async () => {
        const user = await userSvervice.fetchUserDetailApi(param.taiKhoan)
        setUserDetail(user.data.content)
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userDetail?.taiKhoan,
            matKhau: userDetail?.matKhau,
            hoTen: userDetail?.hoTen,
            email: userDetail?.email,
            soDt: userDetail?.soDT,
            maLoaiNguoiDung: userDetail?.maLoaiNguoiDung,
            maNhom: "GP00"
        },
        validationSchema: validateInfo,
        onSubmit: async (values) => {
            try {
                await userSvervice.fetchUserUpdateApi(values)
                notification.success({
                    message: "Cập nhật thành công",
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

    const handleChangeSelect = (value) => {
        formik.setFieldValue("maLoaiNguoiDung", value)
    }

    const { Option } = Select;

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
            <h3 style={{ marginBottom: "5%", textTransform: "uppercase" }}>Thông Tin Tài Khoản</h3>

            <Form.Item label="Tài Khoản">
                <Input style={{ width: "50%" }} name='taiKhoan' onChange={formik.handleChange} value={formik.values?.taiKhoan} /> <br />
                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                    <span className="text-danger">{formik.errors.taiKhoan}</span>
                )}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input style={{ width: "50%" }} name='hoTen' onChange={formik.handleChange} value={formik.values?.hoTen} /> <br />
                {formik.errors.hoTen && formik.touched.hoTen && (
                    <span className="text-danger">{formik.errors.hoTen}</span>
                )}
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input style={{ width: "50%" }} name='matKhau' onChange={formik.handleChange} value={formik.values?.matKhau} /> <br />
                {formik.errors.matKhau && formik.touched.matKhau && (
                    <span className="text-danger">{formik.errors.matKhau}</span>
                )}
            </Form.Item>
            <Form.Item label="Email">
                <Input style={{ width: "50%" }} name='email' onChange={formik.handleChange} value={formik.values?.email} /> <br />
                {formik.errors.email && formik.touched.email && (
                    <span className="text-danger">{formik.errors.email}</span>
                )}
            </Form.Item>
            <Form.Item label="Số điện thoại">
                <Input type="number" style={{ width: "50%" }} name='soDt' onChange={formik.handleChange} value={formik.values?.soDt} /> <br />
                {formik.errors.soDt && formik.touched.soDt && (
                    <span className="text-danger">{formik.errors.soDt}</span>
                )}
            </Form.Item>
            <Form.Item label="Loại Khách Hàng ">
                <Select style={{ width: "50%", marginLeft: 5 }} disabled label="Loại Khách Hàng" placeholder="Chọn loại người dùng" onChange={handleChangeSelect} value={formik.values?.maLoaiNguoiDung}>
                    <Option value="QuanTri">Quản Trị</Option>
                    <Option value="KhachHang">Khách Hàng</Option>
                </Select>

            </Form.Item>
            <Form.Item label="Hành Động">
                <button className='btn btn-success' type="submit">Sửa Thông Tin</button>
            </Form.Item>
        </Form>
    );
}
