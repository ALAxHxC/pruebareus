//Manejador de entidades generico
class Collection 
{
	
	constructor(entity)
	{
		this.collection=entity;
	
	}

	get entity() 
	{
		return this.collection;
	}

	async create(new_document)
	{
		try
		{   
					let document_new= await this.collection.create(new_document);
			return document_new;
		}
		catch(err)
		{	
			console.log(err.message,err.stack);
			throw(err);
		}
	}

	async getDocumentById(id){
		try
		{
			let search_document= await this.collection.findById(id);
			return search_document;
		}
		catch(err)
		{
			console.log(err.message,err.stack);
			throw(err);
		}
	}

	async getAll(){
		try
		{
			let search_document= await this.collection.find({});
			return search_document;
		}
		catch(err)
		{
			console.log(err.message,err.stack);
			throw(err);
		}
	}
	async updateDocument(document){
	try
		{
			let update_document= await document.save();
			return update_document;
		}
		catch(err)
		{
			console.log(err.message,err.stack);
			throw(err);
		}	
	}
	async count(){
		try{
		let total=await  this.collection.countDocuments({});
		return total;
		}catch(err){
			throw(err);
		}
	}
}
module.exports = Collection;