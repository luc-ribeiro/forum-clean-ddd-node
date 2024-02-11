import { type QuestionComment } from '../../enterprise/entities/question-comment'
import { type QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionCommentsUseCaseResponse {
  questionComments: QuestionComment[]
}

export class FetchQuestionCommentsUseCase {
  constructor (
    private readonly questionCommentsRepository: QuestionCommentsRepository
  ) {}

  async execute ({
    questionId,
    page
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments = await this.questionCommentsRepository.findManyByQuestionID(questionId, { page })

    return {
      questionComments
    }
  }
}
