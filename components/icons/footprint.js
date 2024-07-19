const FootprintIcon = props => {
  return (
    //在svg节点添加或修改：
    // width={20} height={20} 
    // fill="currentColor"
    // className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
    //在path节点：
    // 替换fill属性为：fill="currentColor"
    <svg  className="w-5 inline-block transition-transform group-hover:rotate-[20deg]" fill="currentColor" viewBox="0 0 1024 1024"  width="20" height="20"><path fill="currentColor" d="M544 736V591.936a48.064 48.064 0 0 1 47.936-48H736a192 192 0 1 1-192 192z m-448 0a192 192 0 0 1 192-192h143.872a47.936 47.936 0 0 1 48 48v144a192 192 0 0 1-384 0z m495.936-256a48.064 48.064 0 0 1-47.936-48V288a192 192 0 1 1 192 192z m-303.808 0a192 192 0 1 1 192-192v144.064a47.936 47.936 0 0 1-48 48z"  p-id="933"></path></svg>
  )
}

export default FootprintIcon
