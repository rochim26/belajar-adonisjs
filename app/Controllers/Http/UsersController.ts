// CRUD menggunakan framework Adonis JS
// Apa itu framework?
// Framework itu adalah rangka kerja

// Adonis>JS => Framework dari Node>JS
//  CRUD = CREATE, READ, UPDATE, DAN DELETE
// REST API => SISTEM SEPERTI GOPAY
// Materi hari ini akan saya upload ke github
// Tugas temen2 membuat data siswa dan di CRUD-kan

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    // SELECT * FROM users
    return await User.query();
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    // INSERT INTO users(nama, gender, tinggi_badan) VALUE(...)
    return await User.create({
      nama: "Budi",
      gender: "L",
      tinggi_badan: 170,
    });
  }

  public async show({ params: { id } }: HttpContextContract) {
    // SELECT * FROM users WHERE id = 1
    return await User.query().where({ id });
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params: { id } }: HttpContextContract) {
    // UPDATE users SET nama = "Budi" WHERE id = 1
    return await User.query().where({ id }).update({
      nama: "Budi Update",
      gender: "L",
      tinggi_badan: 170,
    });
  }

  public async destroy({ params: { id } }: HttpContextContract) {
    // DELETE FROM users WHERE id = 1
    return await User.query().where({ id }).delete();
  }
}
