'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Pagination() {
  const [data, setData] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1) // Track current page
  const contentPerPage = 10 // Number of items per page

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setData(result.data)
    }

    fetchData()
  }, [])

  // Calculate the number of total pages
  const totalPages = 20

  // Get the data for the current page
  const currentData = data.slice((currentPage - 1) * contentPerPage, currentPage * contentPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      {/* Display the images */}
      <div>
        {currentData.map((itm, index) => (
          <div key={index} className="mb-4">
            <img width={200} src={itm.thumbnailUrl} alt={itm.title} />
            <p>{itm.title}</p>
            <p>{itm.id}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="space-x-2 mx-auto">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}
