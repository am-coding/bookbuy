import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

const Page = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return(
   <>
     {data.map((item: any) => {
       return (
         <div>
            <h1>{item.title}</h1>
            <p>{item.author.firstname} {item.author.lastname}</p>
            <p>{item.isbn}</p>
         </div>
       )  
     })}
   </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:8000/api/books`)
  const data = await res.json()
  return { 
    props: {
      data,
    }
  }
}

 export default Page