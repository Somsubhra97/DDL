export interface Post {
  Id?:number,
  Name:string,
  Email:string,
  Address:string,
  City:string,
  State:string
}

export interface State {
  Id?:number,
  Name:string
}

export interface City {
  CityId?:number,
  CityName:string  
}

export interface Data{
	info:Post[], 
	isLoading:boolean
}
