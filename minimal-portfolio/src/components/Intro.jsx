import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl font-bold md:text-4xl mb-1 md:mb-3 font-serif'>
          Coder Devo
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium ">Frontend Devoloper</p>
        <p className=""> <span className="font-semibold">Bio:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem ad dicta tempora, nulla magnam, voluptate vero labore, repudiandae obcaecati voluptates quisquam tempore unde necessitatibus. Maiores in voluptatum quibusdam sed!
        <br />
        <span className="indent-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repellendus fuga eum rem facere magnam tempore exercitationem! Optio in dicta, reiciendis soluta exercitationem ab quaerat. Officiis sit eum voluptatum ad? {' '}
          </span> <a href="Youtube.you" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">Youtube</a></p>

      </div>
    )
  }
}
