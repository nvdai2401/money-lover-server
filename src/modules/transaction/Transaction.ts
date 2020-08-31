class Transaction {
  private _id: string
  private _amount: number
  private _category: string
  private _createdAt: string
  private _lastModified: string
  private _note: string
  private _image: string

  constructor(id: string) {
    this._id = id
    this._amount = 0
    this._category = ''
    this._createdAt = ''
    this._lastModified = ''
    this._note = ''
    this._image = ''
  }

  public get id(): string {
    return this._id
  }

  public get amount(): number {
    return this._amount
  }

  public set amount(amount: number) {
    this._amount = amount
  }

  public get category(): string {
    return this._category
  }

  public set category(category: string) {
    this._category = category
  }

  public get createdAt(): string {
    return this._createdAt
  }

  public set createdAt(createdAt: string) {
    this._createdAt = createdAt
  }

  public get lastModified(): string {
    return this._lastModified
  }

  public set lastModified(lastModified: string) {
    this._lastModified = lastModified
  }

  public get note(): string {
    return this._note
  }

  public set note(note: string) {
    this._note = note
  }

  public get image(): string {
    return this._image
  }
  public set image(image: string) {
    this._image = image
  }
}

export default Transaction
