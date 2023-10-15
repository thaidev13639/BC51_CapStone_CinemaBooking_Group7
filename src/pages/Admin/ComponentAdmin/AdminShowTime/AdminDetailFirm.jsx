import React, { Fragment, useEffect, useState } from 'react';
import { Table, notification } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { movieService } from '../../../../services/movie';
import { NavLink, useNavigate } from 'react-router-dom';


export default function AdminDetailFirm() {
  const navigate = useNavigate()
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    fetchListMovie();
  }, [])

  const fetchListMovie = async () => {
    const MovieList = await movieService.fetchMovieListApi("");
    setListMovie(MovieList.data.content)
  }

  const deleteFilm = async (maphim, tenPhim) => {
    if (window.confirm(`Bạn Muốn xóa Phim ${tenPhim}`)) {
      try {
        await movieService.fetchDeleteFilmApi(maphim)
        notification.success({
          message: `Bạn Đã Xóa ${tenPhim} Thành Công`,
          placement: "topLeft",
          duration: 2
        })
      } catch (error) {
        notification.warning({
          message: `Xóa ${tenPhim} Không Thành Công`,
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
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      sorter: {
        compare: (a, b) => b.maPhim - a.maPhim,
      },
      width: "10%",
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (_, film, idx) => {
        return (
          <Fragment key={idx}>
            <img src={film.hinhAnh} alt={film.hinhAnh} style={{ width: 100, height: 100 }} />
          </Fragment>
        )
      }
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: {
        compare: (a, b) => {
          let tenPhimA = a.tenPhim.toLowerCase().trim();
          let tenPhimB = b.tenPhim.toLowerCase().trim();
          if (tenPhimA > tenPhimB) {
            return 1;
          }
          return -1;
        }
      },
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      render: (_, film, idx) => {
        return (<Fragment key={idx}>
          {film.moTa.length > 50 ? film.moTa.substr(0, 50) + " ..." : film.moTa}
        </Fragment>)
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, film) => {
        return (
          <Fragment>
            <NavLink key={1} className="mr-2 text-3xl" to={`/admin/edit-film/${film.maPhim}`} style={{ color: "blue", fontSize: "20px" }}><EditOutlined /></NavLink>
            <span key={2} className="text-3xl" to="/" style={{ cursor: 'pointer', color: "red", fontSize: "20px" }} onClick={() => deleteFilm(film.maPhim, film.tenPhim)}><DeleteOutlined /></span>
            <NavLink key={3} className="ml-2 text-3xl" to={`/admin/create-show-time/${film.maPhim}/${film.tenPhim}`} style={{ color: "green", fontSize: "20px" }}><CalendarOutlined /> </NavLink>
          </Fragment>
        )
      },
      width: "10%",
    },
  ];

  const data = listMovie.map((element, idx) => {
    return { ...element, key: `${idx}` }
  })

  const onSearch = async (value) => {
    try {
      const findMovie = await movieService.fetchMovieListApi(value)

      setListMovie(findMovie.data.content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ backgroundColor: "#cbf6e1" }}>
      <h3 >DANH SÁCH PHIM </h3>
      <button onClick={() => navigate("/admin/add-film")} className='btn btn-success my-1' style={{ borderRadius: 15 }}>Thêm Phim</button>
      <Search placeholder="Serch Name Phim" style={{ margin: "20px 0", color: "red" }} onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} style={{ border: "1px solid #00000036" }} />
    </div>
  );
}
