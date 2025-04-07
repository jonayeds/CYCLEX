import { ChangeEvent, useEffect, useState } from "react";
import BiCycleCard from "../components/shared/BiCycleCard";
import { Input } from "../components/ui/input";
import { useGetAllBiCyclesQuery } from "../redux/features/bi-cycles/biCyclesApi";
import { TBiCycle } from "../types/biCycles.types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Filter } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem } from "../components/ui/form";
import { FieldValues,  SubmitHandler, useForm } from "react-hook-form";



const AllBiCycles = () => {
  const { data: allBiCycles, isLoading } = useGetAllBiCyclesQuery(undefined);
  const [bicycles, setBicycles] = useState<TBiCycle[]>([]);
  const form = useForm({
    defaultValues:{
      min:"",
      max:"",
      category:"",
      brand:"",
    }
  })
  const [searchedBiCycles, setSearchedBiCycles] = useState<TBiCycle[]>([])
  const [filterData, setFilterData] = useState({
    min:"",
    max:"",
    category:"",
    brand:"",
  })
  useEffect(() => {
    if (allBiCycles) {
      setBicycles(allBiCycles.data);
      setSearchedBiCycles(allBiCycles.data)
    }
  }, [allBiCycles]);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let searched :TBiCycle[] = allBiCycles.data;
    if(e.target.value){

       searched = allBiCycles.data.filter((bicycle: TBiCycle) =>
        bicycle.name
      .trim()
      .split(" ")
      .join("")
      .toLowerCase()
      .includes(
        e.target.value.trim().split(" ").join("").toLocaleLowerCase()
      )
    )
    setBicycles(searched.filter((s: TBiCycle)=> isfiltered(s)))
    setSearchedBiCycles(bicycles)
  }else{
    setBicycles(searched.filter((s: TBiCycle)=> isfiltered(s)))
    setSearchedBiCycles(allBiCycles.data)
  }
  };
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  const handleFilter: SubmitHandler<FieldValues> = (data)=>{
    let filtered= searchedBiCycles;
    setFilterData(data as {
      min: string;
      max: string;
      category: string;
      brand: string;
  })
    if(data?.min){
      filtered = filtered.filter(bi=>bi.price >= data.min)
    }
    if(data?.max){
      filtered = filtered.filter(bi=>bi.price <= data.max)
    }
    if(data?.category){
      filtered = filtered.filter(bi=>bi.type === data.category)
    }
    if(data?.brand){
      filtered = filtered.filter(bi=> bi.brand === data.brand)
    }
    setBicycles(filtered)
  }

  const isfiltered = (bicycle:TBiCycle)=>{
    if(filterData?.min && (bicycle.price < Number(filterData.min)))  return false
    if(filterData?.max && (bicycle.price > Number(filterData.max))) return false
    if(filterData?.category && (bicycle.type !== filterData.category)) return false
    if(filterData?.brand && (bicycle.brand !== filterData.brand)) return false 
    return true
  }


  return (
    <div className="pt-36">
      <h1 className="text-3xl text-center font-main">All Bi-Cycles</h1>
      
      <div className="flex items-center  mb-4 mt-8 gap-2 justify-center">
        <Input
          className="md:max-w-[20vw] max-w-[50vw] rounded-l-lg rounded-r-none focus:shadow-lg shadow-sm duration-200 outline-none transition-all"
          placeholder="search..."
          onChange={handleSearch}
        />

        <Dialog>
          <DialogTrigger className="border border-gray-300 py-1 px-4 rounded-r-lg flex items-center gap-2 hover:bg-black hover:text-white duration-300">
            Filter <Filter className="w-4" />
          </DialogTrigger>
          <DialogContent className="bg-white border-none max-w-max p-8 ">
            <DialogTitle>Filter Bicycles</DialogTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleFilter)} className="flex flex-col gap-y-3">

              <div className="flex items-center gap-2 ">
              <p>Price :</p>
          <FormField
            control={form.control}
            name="min"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                type="number"
                className="md:w-[10vw] w-[20vw]"
                placeholder="min"
                {...field}
                />
                </FormControl>
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="max"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                type="number"
                className="md:w-[10vw] w-[20vw]"
                placeholder="max"
                {...field}
                />
                </FormControl>
              </FormItem>
            )}
            />
            </div>
            <div className="flex items-center gap-2">
            <p className="">brand :</p>
            <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value} >
                <SelectTrigger >
                  <SelectValue placeholder="Select a Brand" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {
                  (allBiCycles?.data as TBiCycle[])
                  .map((bicycle: TBiCycle) => bicycle.brand)
                  .filter((brand, index, self) => self.indexOf(brand) === index)
                  .map((brand) => <SelectItem key={brand} value={brand}>{brand}</SelectItem>)
                }
                
                </SelectGroup>
                </SelectContent>
              </Select>
                </FormControl>
              </FormItem>
            )}
            />
            </div>
            <div className="flex items-center gap-2">
            <p className="">brand :</p>
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value} >
                <SelectTrigger >
                  <SelectValue placeholder="Select a Brand" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {
                  (allBiCycles?.data as TBiCycle[])
                  .map((bicycle: TBiCycle) => bicycle.type)
                  .filter((type, index, self) => self.indexOf(type) === index)
                  .map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)
                }
                
                </SelectGroup>
                </SelectContent>
              </Select>
                </FormControl>
              </FormItem>
            )}
            />
            </div>
            <DialogClose className=" max-w-max mx-auto" asChild>
              <Button  type="submit" className="border border-gray-300">Filter</Button>
            </DialogClose>
            </form>
      </Form>
              
              
            
            
          </DialogContent> 
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-max mx-auto">
        {bicycles?.map((item: TBiCycle) => (
          <BiCycleCard key={item._id} biCycle={item} />
        ))}
      </div>
    </div>
  );
};

export default AllBiCycles;
