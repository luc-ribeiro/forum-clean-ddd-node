import { type AnswerComment } from '../../enterprise/entities/answer-comment'
import { type AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

interface DeleteAnswerCommentUseCaseResponse {
  answerComment: AnswerComment
}

export class DeleteAnswerCommentUseCase {
  constructor (

    private readonly answerCommentsRepository: AnswerCommentsRepository
  ) {}

  async execute ({
    authorId,
    answerCommentId
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentsRepository.findById(answerCommentId)

    if (answerComment == null) {
      throw new Error('Answer not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return { answerComment }
  }
}
