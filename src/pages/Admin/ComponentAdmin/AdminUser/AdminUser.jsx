import React, { Fragment, useEffect, useState } from 'react';
import { Table, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { userSvervice } from '../../../../services/user';



export default function AdminUser() {
  const navigate = useNavigate()
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    fetchListUser();
  }, [])

  const fetchListUser = async () => {
    const userList = await userSvervice.fetchGetListUserApi("");
    setListUser(userList.data.content)
  }

  const deleteUser = async (taiKhoan) => {
    if (window.confirm(`Bạn Muốn xóa Người Dùng ${taiKhoan}`)) {
      try {
        await userSvervice.fetchUserDeleteApi(taiKhoan)
        notification.success({
          message: `Bạn Đã Xóa ${taiKhoan} Thành Công`,
          placement: "topLeft",
          duration: 2
        })
      } catch (error) {
        notification.warning({
          message: `Xóa ${taiKhoan} Không Thành Công`,
          placement: "topLeft",
          duration: 2
        })
      }
    }
    navigate("/admin")
  }
  const { Search } = Input;

  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      sorter: {
        compare: (a, b) => {
          let taiKhoanA = a.taiKhoan.toLowerCase().trim();
          let taiKhoanB = b.taiKhoan.toLowerCase().trim();
          if (taiKhoanA > taiKhoanB) {
            return 1;
          }
          return -1;
        }
      },
      width: "15%",
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      sorter: {
        compare: (a, b) => {
          let hoTenA = a.hoTen.toLowerCase().trim();
          let hotenB = b.hoTen.toLowerCase().trim();
          if (hoTenA > hotenB) {
            return 1;
          }
          return -1;
        }
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số ĐT',
      dataIndex: 'soDT',
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      sorter: {
        compare: (a, b) => {
          let maLoaiNguoiDungA = a.maLoaiNguoiDung.toLowerCase().trim();
          let maLoaiNguoiDungB = b.maLoaiNguoiDung.toLowerCase().trim();
          if (maLoaiNguoiDungB > maLoaiNguoiDungA) {
            return 1;
          }
          return -1;
        }
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, user) => {
        return (
          <Fragment>
            <NavLink key={1} className="mr-2 text-3xl" to={`/admin/user-edit/${user.taiKhoan}`} style={{ color: "blue", fontSize: "20px" }}><EditOutlined /></NavLink>
            <span key={2} className="text-3xl" to="/" style={{ cursor: 'pointer', color: "red", fontSize: "20px" }} onClick={() => deleteUser(user.taiKhoan)}><DeleteOutlined /></span>
          </Fragment>
        )
      },
      width: "10%",
    },
  ];

  const data = listUser.map((element, idx) => {
    return { ...element, key: `${idx}` }
  })

  const onSearch = async (value) => {
    try {
      const findUser = await userSvervice.fetchGetListUserApi(value)

      setListUser(findUser.data.content)


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h3>DANH SÁCH NGƯỜI DÙNG</h3>
      <button className='btn btn-success' onClick={() => navigate("/admin/user-add")}>Thêm người dùng</button>
      <Search placeholder="Nhập Tài Khoản Cần Tìm" style={{ margin: "20px 0", color: "red" }} onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} style={{ border: "1px solid #00000036" }} />

    </>
  );
}
