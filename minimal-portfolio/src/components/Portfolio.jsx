import React from 'react'
import portfolio from '../data/portfolio';
import PortfolioItem from './Portfolioitem';

export default function Portfolio() {
    return (
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className="grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map(project => (
            <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            />
          ))}

        </div>
      </div>
    )
  }